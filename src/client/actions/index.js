export const FETCH_TIME = 'fetch_time';
export const FETCH_TIME_SET = 'fetch_time_set';


export const fetchTime = () => async dispatch => {
  const firstDayOfSpring = 1553122800000;
  const predate = firstDayOfSpring - JSON.stringify(new Date().getTime());

  const days = Math.floor(predate/(24 * 60 * 60 * 1000));
  const hours = Math.abs( (days*24) - Math.floor(predate/(60 * 60 * 1000)) );
  const minutes = Math.abs( (days*24*60 + hours*60) - Math.floor(predate/(60*1000)) )
  const seconds = Math.abs( (days*24*60*60 + hours*60*60 + minutes*60) - Math.floor(predate/1000) )
    const res = await days + ' days  ' + hours + ' hours  ' + minutes + ' minutes  ' + seconds + ' seconds';
  dispatch({
    type: FETCH_TIME,
    payload: res
  })
}
export const set = (time) => async dispatch => {
    const timestring = time + "T00:00:00.000Z";
    const t = new Date(timestring)
    const gt = t.getTime();

    const predate = gt - JSON.stringify(new Date().getTime());
    const days = Math.floor(predate/(24 * 60 * 60 * 1000));
    const hours = Math.abs( (days*24) - Math.floor(predate/(60 * 60 * 1000)) );
    const minutes = Math.abs( (days*24*60 + hours*60) - Math.floor(predate/(60*1000)) )
    const seconds = Math.abs( (days*24*60*60 + hours*60*60 + minutes*60) - Math.floor(predate/1000) )
    const res = await days + ' days  ' + hours + ' hours  ' + minutes + ' minutes  ' + seconds + ' seconds';
  dispatch({
    type: FETCH_TIME_SET,
    payload: res
  })
}
