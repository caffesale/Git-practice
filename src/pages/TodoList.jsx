import React, { useState } from "react";

import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";



function TodoList() {
    
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    )
}

export default TodoList;