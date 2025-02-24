import { type Layer2, type Layer3 } from '@l2beat/config'
import { assertUnreachable } from '@l2beat/shared-pure'
import { z } from 'zod'
import { isProjectOther } from '../../utils/is-project-other'

export const ActivityProjectFilter = z.union([
  z.object({
    type: z.enum(['all', 'rollups', 'validiumsAndOptimiums', 'others']),
  }),
  z.object({ type: z.literal('projects'), projectIds: z.array(z.string()) }),
])

export type ActivityProjectFilter = z.infer<typeof ActivityProjectFilter>

export function createActivityProjectsFilter(
  filter: ActivityProjectFilter,
): (project: Layer2 | Layer3) => boolean {
  switch (filter.type) {
    case 'all':
      return () => true
    case 'rollups':
      return (project) =>
        !isProjectOther(project) &&
        (project.display.category === 'Optimistic Rollup' ||
          project.display.category === 'ZK Rollup')
    case 'validiumsAndOptimiums':
      return (project) =>
        !isProjectOther(project) &&
        (project.display.category === 'Validium' ||
          project.display.category === 'Optimium' ||
          project.display.category === 'Plasma')
    case 'others':
      return (project) => isProjectOther(project)
    case 'projects':
      return (project) => new Set(filter.projectIds).has(project.id)
    default:
      assertUnreachable(filter)
  }
}
