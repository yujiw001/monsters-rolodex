import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';
// export 将会从模块中导出函数/对象/或值以便其他函数使用
export const CardList = props => (
        
        //it's going to return every element in the array. amonster是array中的每个元素所指代的变量物件，所以拥有.property  prop是obj ，所以可以用.来调用其中元素
        <div className='card-list'>
            {props.monsters.map(amonster =>(
                <Card key={amonster.id} amonster={amonster} />
            ))}
        </div>
        
    );
