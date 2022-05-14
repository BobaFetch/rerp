import { useState } from 'react'

function NewPlanForm() {
    return (
        <div className='border border-black'>
            this would be a form
        </div>
    )
}

function GetPlanning() {
    const [thisPart, setThisPart] = useState('')
    const [thisRelease, setThisRelease] = useState('')

    function handlePart(e) {
        setThisPart(e.target.value)
    }

    function handleRelease(e) {
        setThisRelease(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log({thisPart, thisRelease})
    } 

    return (
        <form onSubmit={handleSubmit} className='border border-black'>
            <label htmlFor="part-number">Part Number:
              <input type='search' id='part-number' value={thisPart} onChange={handlePart} />
            </label>
            <label htmlFor="release">Release Number: 
              <input type="text" id='release' value={thisRelease} onChange={handleRelease}/>
            </label>
            <input type="submit" className='p-2 bg-gray-400 rounded'/>
        </form>
    )
}

const moduleMap = {
    NewPlanForm,
    GetPlanning
}

export default function Production() {
    const [module, setModule] = useState('GetPlanning')

    const ComponentToRender = moduleMap[module]
    return (
        <div>
            <h1 className="text-3xl">This is the Production view</h1>
            
                <ul>
                    <ul> <span>Manufacturing Plans</span>
                      <ul>EDIT</ul>
                        <li>Create Manufacturing plan</li>
                        <li>Revise Manufacturing Plan</li>
                        <li>Manufacturing Order Parameters</li>
                      <ul>VIEW</ul>
                        <li>Manufacturing Plan</li>
                        <li>Manurfacturing Plans</li>
                    </ul>


                    <li>Create Purchase Orders</li>

                </ul>
            
            <ComponentToRender />
        </div>
    )
}