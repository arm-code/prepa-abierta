export function Boton(props) {
    const yellow_class = 'bg-yellow-500 rounded text-black font-bold p-3 m-3';
    const red_class = 'bg-red-500 rounded text-white font-bold p-3 m-3';
    let className = '';
    
    if(props.class_name === 1){
        className = yellow_class;
    }else if(props.class_name===2){
        className = red_class;
    }
    
  return (
    <div className={className}><a href={props.link_to_page} target="_blank">{props.txt}</a></div>
  );
}
