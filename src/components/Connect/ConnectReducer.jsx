import React from 'react';

function ConnectReducer(status,action) {
   switch (action.type) {
       case "connect":
           return status = "Connected"
       case "disconnect":
           return status = "Disconnect"
   }
}

export default ConnectReducer;