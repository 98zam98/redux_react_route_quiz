const ScoreUp="ScoreUp"
const ScoreDown = "ScoreDown";

export const ScoreUpAct = ()=>
{
    return {type:ScoreUp};
}

export const ScoreDownAct = ()=>
{
    return {type:ScoreDown};
}

const score_reducer = (state = 0,action)=>
{
    switch (action.type) {
        case ScoreUp:
            return state+1;
    
        case ScoreDown:
            return 0;
    
        default:
            return state;
    }
}



export default score_reducer;