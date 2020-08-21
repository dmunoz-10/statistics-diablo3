import { post } from 'axios'

const clientId = 'b3db715f4720438e9aedab0ecc9e5788'
const clientSecret = 'MxMtoL2Q0fU7cx6NxpP6mRiLbssjPRhZ'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret },
  }

  return post(API_URL, body, config)
}

export {
  getToken,
}
