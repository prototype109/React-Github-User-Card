import React from 'react';
import styled from 'styled-components';

const UserCard = props => {
    let totalFollowers = props.userInfo.data.followers;

    const UserContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        max-width: 700px;
        margin: 50px auto 0;
    `;

    const UserInfo = styled.div`
        display: flex;
    `;

    const UserImg = styled.img`
        height: 200px;
    `;

    const FollowerImg = styled.img`
        margin: 0 auto;
        width: 50px;
    `;

    const FollowerInfo = styled(UserInfo)``;

    const FollowerContainer = styled(UserContainer)`
        border: none;
        max-width: initial;
        margin: 0 10px;
    `;

    const FollowerCount = styled.p`
        margin-top: 28px;
    `;

    const getTopThree = () => {
        totalFollowers -= 3;
        return props.userInfo.followersData.map((follower, index) => {
            if(index < 3){
                    return(
                    <FollowerContainer>
                        <FollowerImg src={follower.avatar_url} alt='Follower'/>
                        <p>{follower.login}</p>
                    </FollowerContainer>
                )
            }
        })
    }

    return(
        <UserContainer>
            <UserInfo>
                <UserImg src={props.userInfo.data.avatar_url} alt='User' />
                <h1>{props.userInfo.data.login}</h1>
                {/* <div className='calendar'>
                    loading calendar
                </div> */}
            </UserInfo>
            <h2>Repos: {props.userInfo.data.public_repos}</h2>
            <FollowerInfo>
                {getTopThree()}
                {totalFollowers > 3 ? <FollowerCount>{totalFollowers} More Followers</FollowerCount> : null}
            </FollowerInfo>
        </UserContainer>
    )
}

export default UserCard;