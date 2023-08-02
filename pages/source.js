import React,{useState,useEffect} from 'react'
var createGuest = require('cross-domain-storage/guest');
var createHost = require('cross-domain-storage/host');


const Source = () => {
    const [name, setName] = useState('')
    const [cross, setCross] = useState('')

    useEffect(() => {
        
        var storageHost = createHost([
            {
                origin: 'http://localhost:3000',
                allowedMethods: ['get', 'set', 'remove'],
            },
            {
                origin: 'http://localhost:3001',
                allowedMethods: ['get'],
            },
        ]);
    }, [])
    
    const setValue = () => {
        localStorage.setItem('first_name','imtiaj')
    }
    useEffect(() => {
        const getValue = () => {
            var bazStorage = createGuest(window.location.href==='http://localhost:3001/destination' ? 'http://localhost:3000/source' : 'http://localhost:3001/destination');
            bazStorage.get('name', function(error, value) {
                if(error){
                    console.log(error)
                }
                setCross(value)
            });
        }
        getValue()
    }, [])
    useEffect(() => {
     setName(localStorage.getItem('name'))
    }, [])
    
  return (
    <div>
        <h1>Set Value in 3000</h1>
        <button onClick={setValue}>setValue</button>
        <p>The item is {name}</p>
        <br></br>
        <br></br>
        <h1>Set Value in 3001</h1>
        {/* <button onClick={getValue}>getValue</button> */}
        <p>The item is {cross}</p>

        

    </div>
  )
}

export default Source