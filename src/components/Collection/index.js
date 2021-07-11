import React from "react"
import { BasicTable } from "./BasicTable"
import { useAsyncEffect } from 'use-async-ops'
import * as asyncOpNames from '../../constants/asyncOpNames'
import CardTable from "./CardTable"

const Collection = () => {
  useAsyncEffect({ name: asyncOpNames.GET_LIBRARY })

  return (
    <>
      {/* <BasicTable /> */}
      <CardTable />
    </>
  );
};

export default Collection;
