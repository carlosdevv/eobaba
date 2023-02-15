'use client'
import { firebaseAuth } from '@/services/firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode, useCallback,
  useContext,
  useState
} from 'react'
import { toast } from 'react-toastify'
import { CredentialsProps, UserProps } from './types'

type AuthContextData = {
  user?: UserProps
  signIn: ({ email, password }: CredentialsProps) => void
  signInWithGoogle: () => Promise<void>
  createUser: ({ email, password }: CredentialsProps) => void
  logOut: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<UserProps>()

  const signIn = useCallback(async ({ email, password }: CredentialsProps) => {
    try {
      const result = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )

      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        setUser({
          id: uid,
          name: displayName ?? 'Usuário',
          avatar: photoURL ?? ''
        })
      }

      router.push('/')
    } catch (error) {
      toast.error('Erro ao realizar o login, tente novamente.')
    }
  }, [])

  const signInWithGoogle = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider()

      if (!user) {
        const result = await signInWithPopup(firebaseAuth, provider)

        if (result.user) {
          const { displayName, photoURL, uid } = result.user

          setUser({
            id: uid,
            name: displayName ?? '',
            avatar: photoURL ?? ''
          })
        }
        toast.success('Login realizado com sucesso.')
        router.push('/')
      }
    } catch (error) {
      toast.error('Erro ao realizar o Login, tente novamente.')
    }
  }, [])

  const createUser = useCallback(
    async ({ email, password }: CredentialsProps) => {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password)

        toast.success('Usuário registrado com sucesso.')
      } catch (error) {
        toast.error('Erro ao criar usuário.')
      }
    },
    []
  )

  const logOut = useCallback(async () => {
    await signOut(firebaseAuth).then(() => {
      setUser(undefined)
      router.push('/login')
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signInWithGoogle,
        createUser,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const value = useContext(AuthContext)

  return value
}
