import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostEdit, PostList, PostShow } from "./Post";
import { CommentEdit, CommentList, CommentShow } from "./Comment";


export const App = () =>
  <Admin dataProvider={dataProvider} >
    <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} />
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} />

    <Resource name="comments" list={CommentList} show={CommentShow} edit={CommentEdit} />
  </Admin>;