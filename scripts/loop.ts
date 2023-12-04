const sum = (arr: number[], acc = 0): number => {
    return (arr.length > 0) ? sum(arr.slice(1), acc + arr[0]) : acc;
}

const main = () => {
    console.log(sum([...Array(100).keys()]));
}

main();
