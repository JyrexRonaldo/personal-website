function TechStackCard({data}) {
    return <div>

        <div>
            <p>{data.title}</p>
        </div>
        <hr />
        <div>
            {data.item}
        </div>
    </div>
}

export default TechStackCard