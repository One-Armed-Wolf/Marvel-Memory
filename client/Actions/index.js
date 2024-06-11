import request from 'superagent'

export const FLIP = 'FLIP'
export const ALL_FLIP = 'ALL_FLIP'
export const ALL_UN_FLIP = 'ALL_UN_FLIP'
export const UN_FLIP = 'UN_FLIP'

export function flipCard (id) {
  return {
    type: FLIP,
    id: id
  }
}

export function allFlip() {
  return {
    type: ALL_FLIP
  }
}

export function allUnFlip() {
  return {
    type: ALL_UN_FLIP
  }
}

export function unflip(id) {
  return {
    type: UN_FLIP,
    id: id
  }
}

