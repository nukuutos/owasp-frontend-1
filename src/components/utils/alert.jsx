import React, { useEffect, useState } from 'react';

const Alert = ({ alertsState }) => {
  const [alerts, setAlerts] = alertsState;
  const [isShow, setIsShow] = useState(false);

  const popUpAnimationDuration = 2000;
  const alertAnimationDuration = 2000;

  const animationDuration = alertAnimationDuration + popUpAnimationDuration;

  useEffect(() => {
    console.log(alerts);

    if (alerts.length && !isShow) {
      setIsShow(true);

      setTimeout(() => {
        setIsShow(false);
      }, alertAnimationDuration);

      setTimeout(() => {
        setAlerts(([firstAlert, ...alerts]) => alerts);
      }, animationDuration);
    }

    // without cleanup function!
  }, [alerts.length]);

  // for animation not using {alerts[0] && component}

  // for correct work not using ternary operator
  // className = type === 'success' ? 'alert--success' : 'alert--fail'
  // e.g. success alert, time is up, alert becomes fail (alert does not hidding in time)

  let message, status;
  const alert = alerts[0];
  if (alert) ({ message, status } = alert);

  return (
    <>
      <div className={`alert ${alert && status === 200 && isShow ? 'alert--show' : ''} alert--success`}>
        {alert && message}
      </div>

      <div className={`alert ${alert && status !== 200 && isShow ? 'alert--show' : ''} alert--fail`}>
        {alert && message}
      </div>
    </>
  );
};

export default Alert;
