import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis architecto magnam aperiam deserunt distinctio eaque officia? Dolore beatae nihil saepe, impedit omnis, nemo expedita enim cumque, libero soluta quae.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Mina</div>
                    <div>2nd September</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
