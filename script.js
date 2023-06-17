// Q1..
function duplicate(n){
    let ans = new Set(n)
    ans =[...ans]
    let result = ans.join('')
    console.log(result)
}
duplicate("abcadeecfb")

// Q2...
function countOfstr(str){
    let map = new Map()
    for(let i=0;i<str.length;i++)
    {
        if(map.has(str[i]))
        {
            let value = map.get(str[i])
            map.set(str[i],value+1)
        }
        else{
            map.set(str[i],1)
        }
    }
    for(let [k,x] of map){
        console.log(k + "=" + x)
    }
}
countOfstr("abcadeecfb")