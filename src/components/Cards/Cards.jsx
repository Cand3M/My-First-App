import Card from '../card/Card';
import styles from './cards.module.css';
export default function Cards({characters, onClose}) {
  
   return (
      <div className={styles.cards}>
      {characters.map((char)=> (
        
         <Card
         key={char.id}
         id={char.id}
         name={char.name}
         status={char.status}
         species={char.species}
         gender={char.gender}
         origin={char.origin.name}
         image={char.image}
         onClose={onClose}
      />
      )
      )}
   </div>
   )
}
