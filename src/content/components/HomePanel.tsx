import * as React from 'react';

import { Card, CardContent } from '@material-ui/core';
import DutyPanel from '../containers/DutyPanel';
import ForgePanel from '../containers/ForgePanel';
import RepairPanel from '../containers/RepairPanel';

const HomePanel: React.FC = () => {
    return (
        <Card
            style={{ background: 'white', height: 288, width: 276 }}
        >
            <CardContent style={{ padding: 0, marginTop: 6, marginLeft: 6 }}>
                <ForgePanel />
                <RepairPanel />
                <DutyPanel />
            </CardContent>
        </Card>
    );
};

export default HomePanel;
