export default store => next => action => {
    const { withRandomId, ...rest } = action;
    if (!withRandomId) return next(action);

    next({
        ...rest,
        randomId: parseInt(Date.now() * Math.random(), 10).toString(36)
    })
}
