
export function Selected (props:any) {

    return (
      <div>
        {props.selected?.map((item:any, idx:any) => {
            return (
                <div key={idx} className="font-light tracking-wide">
                    <p>Answer: {item.content}</p>
                    <p>Cost: {item.cost}</p>
                    <p>Right: {item.right}</p>
                </div>
            )
        })}
      </div>
    )

}

export default Selected