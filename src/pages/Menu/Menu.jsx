import { useEffect, useState } from 'react';
import './Menu.scss'
import axios from 'axios'
import React from 'react';

const Menu = () =>{

    const [menu, setMenu] = useState([]);

    useEffect(() => {
            axios
            .get('http://localhost:4444/menu-management/menu')
            .then((res) => setMenu(res.data))
            .catch(err => {
            console.log(err);
        });
        }, []);

    return (
        <>
            <div id='menu-container'>
                <div id='cart'>
                    {/* 
                    // header order
                    // items ... with quantity
                    // total price + currency
                    // order button
                    */}
                </div>
                <div id='menu'>
                    <div id='menu-header'>
                        {/* cart button */}
                        <span></span>
                        <span>Menu</span>
                        {/* filter button */}
                        <span></span> 
                    </div>
                    <div className='categories-container'>
                        {menu.menu?.map((menu)=>(
                            <div className='category-container'>
                                <div className='category-name'>{menu?.category}</div>
                                <div className='items-container'>
                                    {
                                        menu?.items.map((objOfItem)=>(
                                            <>
                                                {
                                                objOfItem.item?.map((item)=>(
                                                    <div className='menu-item'>
                                                        <div className='m-item' >
                                                            <span value={item.item_name}>{item.item_name}</span>
                                                            <div className='m-price'>
                                                                <span>{item.item_price}</span>
                                                                <span>{item.item_currency}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </div>
                                                        
                                                        { objOfItem.extra?.map((extra)=>(
                                                        <div className='extra-container'>
                                                            <span>{extra.extra_name}</span>
                                                            <div className='m-price'>
                                                                <span>{extra.extra_price}</span>
                                                                <span>{extra.extra_currency}</span>
                                                                <span>+</span>
                                                            </div>
                                                        </div>
                                                        ))}
                                                    </div> 
                                                    ))
                                                }
                                                </>
                                            
                                        ))
                                    }
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id='filter'>
                    {/* 
                    <input type='text' /> //search by name 
                    //sort by category
                    //filter by category and price
                    <button>apply</button>
                    */}
                </div>
            </div>
        </>
    );
}
export default Menu 