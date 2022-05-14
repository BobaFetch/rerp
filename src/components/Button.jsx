export default function Button(props) {
    return (
        <button
          className='text-black text-center text-xs h-20 w-20 rounded bg-white'
          title={props.title}
          onClick={props.onClick}
        >{props.children}</button>
    )
}

