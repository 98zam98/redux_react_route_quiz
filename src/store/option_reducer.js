
const op0="op0"
const op1 = "op1";
const op2 = "op2";

export const op2Act = ()=>
{
    return {type:op2};
}

export const op0Act = ()=>
{
    return {type:op0};
}

export const op1Act = ()=>
{
    return {type:op1};
}

const option_reducer = (state = 2,action)=>
{
    switch (action.type) {
        case op2:
            return 2;

        case op1:
            return 1;
    
        case op0:
            return 0;
    
        default:
            return 2;
    }
}


export default option_reducer;