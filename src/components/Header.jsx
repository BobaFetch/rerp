export default function Header(props) {
    return (
        <div className='flex items-center justify-between p-2 text-white my-3'>
            <h1 className='text-6xl font-light italic'>ERP SYSTEM</h1>
            <h1 className='text-5xl font-light'>{props.name}</h1>
        </div>
    )
}
