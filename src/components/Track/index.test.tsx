// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Track from '.';
import data from '../../Data.js';
import store from "../../Data/Store.js";

test('Render track component', () => {
  render(
    <Provider store={store}>
      {/*}
      <Track
        albumName={data.name}
        songName={data.name}
        uri={data.uri}
        url={data.name}
        artistName={data.name}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setSelectedList={()=>{}}
        selectedlist={data.name}
      />
      {*/}
    </Provider>
  );
  // expect(screen.getByText(data.name)).toBeInTheDocument();
  // expect(screen.getByText(data.artists[0].name)).toBeInTheDocument();
  //expect(screen.getByText(data.album.name)).toBeInTheDocument();
});