import { render } from '@testing-library/react';
import React, { Component } from 'react';


const MenuMakanan = (props) =>{

    if(props.stock !== 0)
    {
        return(
            <div>
              <div style={{ border : '1px solid black' , width : 300, margin : 'auto'}}> 
                <p>Nama Menu : {props.namaMenu}</p>
                <p> Harga : {props.hargaMenu}</p>
                <p> Stock : {props.stock}</p>
              </div>
            </div>
        )
    }
    else {
        return(
            <div>
              <div style={{ border : '1px solid black' , width : 300, margin : 'auto'}}> 
                <p>Nama Menu : {props.namaMenu}</p>
                <p> Stock Habis</p>
              </div>
            </div>
        )
    }


   
}


export default MenuMakanan;