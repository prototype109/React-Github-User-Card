import React from 'react';

const UserCard = props => {
    const totalFollowers = 0;

    const getTopThree = () => {
        props.userInfo.followersData.map(follower => {
            return(
                <div>
                    <img src={follower.avatar_url} />
                    <p>{follower.login}</p>
                </div>
            )
        })
    }

    return(
        <div>
            <img src={props.userInfo.data.avatar_url} alt='User' />
            <p>{props.userInfo.data.login}</p>
            <div>
                {/* <p></p>
                <p>{props.userInfo.followersData}</p> */}
            </div>
        </div>
    )
}

export default UserCard;