import React from 'react';
import * as S from './styles';
import { TwitterLogo, Buildings, MapPin, Link } from 'phosphor-react';
import axios from 'axios';

const index = ({ userSearch, requestData, setRequestData }) => {
  const [userData, setUserData] = React.useState([]);

  async function reqUserSearch() {
    axios.get(`https://api.github.com/users/${userSearch}`).then((response) => {
      setUserData(response.data);
    });
    setRequestData(false);
  }

  React.useEffect(() => {
    if (requestData) reqUserSearch();
  }, [requestData]);

  return (
    <S.StatsContainer>
      <img
        src={
          userData.avatar_url
            ? userData.avatar_url
            : 'https://avatars.githubusercontent.com/u/583231?v=4'
        }
        alt="User logo"
      />
      <div>
        <div className="username">
          <h2>{userData.name ? userData.name : 'The Octocat'}</h2>
          <span>
            {userData.created_at ? `Joined ${userData.created_at}` : 'Joined 2011-01-25T18:44:36Z'}
          </span>
        </div>
        <span className="user-id">
          @{userData.login ? userData.login : 'octocat'}
        </span>
        <p>{userData.bio ? userData.bio : 'No bio.'}</p>
        <S.UserActivesInfo>
          <li>
            <span>Repos</span>
            <strong>{userData.public_repos ? userData.public_repos : 0}</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>{userData.followers ? userData.followers : 0}</strong>
          </li>
          <li>
            <span>Following</span>
            <strong>{userData.following ? userData.following : 0}</strong>
          </li>
        </S.UserActivesInfo>
        <S.PersonalInfo>
          <li>
            <MapPin size={20} color="#ffffff" weight="fill" />
            <span>{userData.location ? userData.location : 'No location'}</span>
          </li>
          <li>
            <TwitterLogo size={20} color="#ffffff" weight="fill" />
            <span>
              {userData.twitter_username
                ? userData.twitter_username
                : 'No twitter'}
            </span>
          </li>
          <li>
            <Link size={20} color="#ffffff" weight="fill" />
            <span>{userData.blog ? userData.blog : 'No Blog'}</span>
          </li>
          <li>
            <Buildings size={20} color="#ffffff" weight="fill" />
            <span>{userData.company ? userData.company : 'No company'}</span>
          </li>
        </S.PersonalInfo>
      </div>
    </S.StatsContainer>
  );
};

export default index;
