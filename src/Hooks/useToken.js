import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    console.log(user);
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`https://serene-caverns-13504.herokuapp.com/users/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      }).then(res => res.json())
        .then(data => {
          // console.log(data)
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        })
    }
  }, [user])
  return [token]
}
export default useToken;