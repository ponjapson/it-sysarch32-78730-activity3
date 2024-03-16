import { useState } from "react";

function content(){
    const [list, setlist] = useState([])
    useEffect(() => {
        fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
        .then(response => response.json())
        .then(data => {
            setList(data);
        });
    })
}