// eslint-disable-next-line 
import React from 'react';
import { Card, Grid} from 'semantic-ui-react';
import './People.css'

export default function People({data}){
    return(
        <>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((people, i)=>{
                return(
                    <Grid.Column key={i}>
                        <Card className="cardHeight">
                            <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                
                                    <Card.Description>
                                        <div className='description'>
                                            <div className='moreInfo'>Height:{people.height}</div>
                                            <div className='moreInfo'>Mass:{people.mass}</div>
                                            <div className='moreInfo'>Gender: {people.gender}</div>
                                            <div className='moreInfo'>Skin Color: {people.skin_color}</div>            
                                        </div>
                                    </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>  
                )
            })}
        </Grid>
        </>
    )
}