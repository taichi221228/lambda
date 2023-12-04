const sum = (arr: number[], acc = 0): number => {
    return (arr.length === 0) ? acc : sum(arr.slice(1), acc + arr[0]);
}

const main = () => {
    console.log(sum([...Array(100).keys()]));
}

main();
