import React from 'react';

const diaries = [
    {
        id: "ss-won",
        name: "diet"
    },
    {
        id: "dduck",
        name: "덕질"
    }
]
type diaryProps = {
    id: string;
    name: string;
}

const Diary: React.FC<diaryProps> = ({id, name}) =>{
    return(
        <div style={{border: "2px solid black"}}>
            {id} : {name} diary EXAMPLE
        </div>
    )
}

const Feed = () => {
  return (
    <div>
      {
        diaries.map((d) => (
            <Diary id={d.id} name={d.name}/>
        ))
      }
    </div>
  );
}

export default Feed;