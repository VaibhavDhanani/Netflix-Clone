import React, { useEffect, useState } from "react";
import "./abc.css";

function Abc() {
    const [backdata, setbackdata] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => {
                setbackdata(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="abc">
            <h1>Hello</h1>
          {
            (typeof backdata.users === 'undefined') ?(<p>loading</p>):(backdata.users.map((user,i)=>(
                <p>{user}</p>
            )))
          }
        </div>
    );
}

export default Abc;
