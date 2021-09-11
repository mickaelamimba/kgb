export const patt = new RegExp("^[0-9]{4}[^a-zA-Z0-9_][0-9]{2}[^a-zA-Z0-9_][0-9]{2}[a-zA-Z]([0-9][^a-zA-Z0-9_]*)+");
function replacer(match, p1, p2, p3, offset, string) {
    return p3.slice(0,10)
}
export const formatsDate =(date)=>{
    if (globalRegex.test(date)){
        return date.replaceAll(globalRegex,replacer)
    }

}
export const globalRegex = new RegExp("^[0-9]{4}[^a-zA-Z0-9_][0-9]{2}[^a-zA-Z0-9_][0-9]{2}[a-zA-Z]([0-9][^a-zA-Z0-9_]*)+", 'g');
export const formatDateInArray =(obj)=>{
    Object.entries(obj).map(([valueKeys, values])=>{
        if(values !== undefined && patt.test(values) ){

                {obj[valueKeys] = formatsDate(values)}
        }
        if(Array.isArray(values)){
            values.map((objArray)=>{
                Object.entries(objArray).map(([arrayKey, arrayValue],i)=>{

                    if( arrayValue!== undefined && patt.test(arrayValue)){
                        {objArray[arrayKey] = formatsDate(arrayValue)}

                    }

                })

            })

        }
    })
}
