import React, { Component } from 'react';
import { getVideos, getCharacters } from '../api';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null,
      error:null
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true });

    // Promises example
    // getVideos()
    //   .then(data => this.setState({ videos: data, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));

    try{
      const videos = await getVideos();
      const characters = await getCharacters()
      // this.setState({ characters });
      this.setState({ videos });
      this.setState({ isLoading: false });
    } catch(error){
      this.setState({ error, isLoading: false });
    }
  }
  render() {
    const { characters, videos, isLoading, error } = this.state;
    if (isLoading) {
      return <Loading message="Cargando ..."/>;
    }
    if (error) {
      return <p className="error" >{error.message}</p>;
    }
    return (<React.Fragment>
      <Header onClickAdd={this.handleAdd} />
      <div className="container">
        <div className="grid-container">
          {
            videos && videos.map((video,i) => {
              return (<Item key={i} data={video}/>)
            })
          }
        </div>
      </div>
      {/*<div className="container">*/}
      {/*  <div className="grid-container">*/}
      {/*    {*/}
      {/*      characters && characters.results.map((result,i) => {*/}
      {/*        return (<img className="preview-image" src={result.image} alt={result.name}/>)*/}
      {/*      })*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*</div>*/}
    </React.Fragment>);
  }
}

export default List;
