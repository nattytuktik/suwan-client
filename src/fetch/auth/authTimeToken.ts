const endpoint = "http://localhost:5001/auth/token-time"

export default async function authTimeToken(){
  const token = localStorage.getItem("token");
  if (token) {
    const getTimeToken = await fetch(endpoint, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (getTimeToken.ok){
      return true;
    }else {
      localStorage.removeItem("token");
      return false;
    }
  }else {
    return false;
  }
  
}