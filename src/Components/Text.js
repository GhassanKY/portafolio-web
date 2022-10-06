import React from 'react'
import '../style/Text.css'
import perfil from '../img/ImagenPerfil.svg?'

export const Text = () => {

    return (
        <div className="Text">


                <h1>Hola, Soy Ghassan!</h1>

            <img className='imgProfile' src={perfil} alt="Ghassan" />

                <h2>  Full Stack Developer </h2>

            <div className='TextBox'>
                <p className='TextInside'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit iure quia magni porro dolore! Aliquam eveniet nemo quibusdam voluptatibus eaque optio tenetur facilis,
                    quas in odit error reiciendis suscipit ad.</p>
            </div>


        </div>
    )
}
