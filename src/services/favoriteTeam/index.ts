const API_URL = 'https://api.api-futebol.com.br/v1/times/1'

export async function fetchTeam() {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer test_5f56209d3845200d816c3f3d10d84e'
    }
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error('Erro ao buscar na API')
  }
  return json.data
}
