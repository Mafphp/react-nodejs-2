import React, { useState, useEffect } from "react";
import * as axios from "axios";

async function get(url, body) {
  const result = await axios.get(`http://localhost:3002/${url}`, {
    // id: "aaaa",
  });
  return result;
}

async function post(url, body) {
  const result = await axios.post(`http://localhost:3002/${url}`, { ...body });
  return result;
}

const API = { get, post };
export default API;
