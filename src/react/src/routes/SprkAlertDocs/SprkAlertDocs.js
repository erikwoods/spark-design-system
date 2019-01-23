import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkAlert } from '@sparkdesignsystem/spark-core-react';

const SprkAlertDocs = () => {
  return (
    <CentralColumnLayout>
      <div className="sprk-u-mbm">
        <SprkAlert message="Information alert message placeholder." variant="info" idString="alert-1"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Success alert message placeholder." variant="success" idString="alert-2"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Plain alert message placeholder." idString="alert-3"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Fail alert message placeholder." variant="fail" idString="alert-4"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Fail alert message that is not dismissible." variant="fail" idString="alert-4" isDismissible={false}/>
      </div>
    </CentralColumnLayout>
  );
};

export default SprkAlertDocs;
