import React from 'react';

function FeatureToggle({idEnabled, featureName}) {
    return idEnabled ? (
        <div>{featureName}</div>
    ) : (
        <div>{`Feature: ${featureName} is disabled`}</div>
    )
}

export default FeatureToggle