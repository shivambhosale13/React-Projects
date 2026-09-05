export default function language(props){
  const style = {
    backgroundColor : props.backgroundColor,
    color : props.color,
  }
  return(
    <span style={style}>{props.name}</span>
  )
}