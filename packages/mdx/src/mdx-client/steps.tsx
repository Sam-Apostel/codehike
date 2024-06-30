import React from "react"

export function extractPreviewSteps(
  children: React.ReactNode,
  hasPreviewSteps?: boolean
) {
  if (Array.isArray(children) && Array.isArray(children[0]) && children[0].length === 2) {
    children = children.map(([actualStep]) => actualStep);
  }
  
  const allChildren = React.Children.toArray(children)

  const stepsChildren = hasPreviewSteps
    ? allChildren.slice(0, allChildren.length / 2)
    : allChildren

  const previewChildren = hasPreviewSteps
    ? allChildren.slice(allChildren.length / 2)
    : undefined

  return { stepsChildren, previewChildren }
}
