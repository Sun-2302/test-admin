import { ReactNode } from "react";
import { Datagrid, Edit, EditButton, EmailField, List, NumberField, ReferenceField, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";

export const CommentList=():ReactNode=>(
    <List>
        <Datagrid bulkActionButtons={false} rowClick="show">
        <ReferenceField reference="posts" source="postId" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
)
export const CommentEdit = ():ReactNode => {
    return (
      <Edit>
        <SimpleForm>
          <TextInput label="Post Id" source="postId" disabled />
          <TextInput label="Id" source="postId" disabled />
          <TextInput label="Name" source="name" required />
          <TextInput label="Email" source="email" disabled />
        </SimpleForm>
      </Edit>
    )
  }

  export const CommentShow = ():ReactNode => {
    return (
      <Show>
        <SimpleShowLayout>
          <TextField source="postId" link="posts" />
          <NumberField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
        </SimpleShowLayout>
      </Show>
    )
  }