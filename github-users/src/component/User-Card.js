import React from 'react';

const UserCard = props => {
    let totalFollowers = 0;

    const getTopThree = () => {

        totalFollowers = props.userInfo.followersData.length - 3;
        return props.userInfo.followersData.map(follower => {
            return(
                <div>
                    <img src={follower.avatar_url} alt='Follower'/>
                    <h1>{follower.login}</h1>
                </div>
            )
        })
    }

    return(
        <div>
            <img src={props.userInfo.data.avatar_url} alt='User' />
            <h1>{props.userInfo.data.login}</h1>
            <div>
                {/* <p></p>
                <p>{props.userInfo.followersData}</p> */}
                {getTopThree()}
                {totalFollowers > 3 ? <p>{totalFollowers} More Followers</p> : null}
            </div>
        </div>
    )
}

export default UserCard;