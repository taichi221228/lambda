const sum = ([n, ...rest]: number[]): number => {
    return (n === undefined) ? 0 : n + sum(rest);
}

const main = () => {
    console.log(sum([...Array(100).keys()]));
}

main();
