import React from 'react';

const Liste=function(props) {
    return (
        <div id='liste'>
            <table>
                <thead>
                    <tr id="head">
                        <td>Id</td>
                        <td>Nom</td> 
                        <td>Nom de l'utilisateur</td>
                        <td>Email</td>
                        <td>Telephone</td>
                    </tr>
                </thead>
                <tbody>
                    {props.liste.map(user=>{
                        return(
                            <tr key={user.id} onClick={e=>props.user(user.id)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                         );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Liste;