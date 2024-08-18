import axios from "axios";
const loginUser = async (forntendData) =>
{
    const response = await axios.post('http://localhost:3001/user/Login_user', forntendData)
    if (response.data)
{
    localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
